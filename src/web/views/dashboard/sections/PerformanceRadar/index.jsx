import React, { useState, useEffect } from 'react';

import {
  pageRadarDashboard,
  radarGraph,
  radarHeader,
  radarWrapper,
  radarSubtitles,
  radarSubtitlesItem,
  radarSubtitlesItemYourData,
  radarSubtitlesItemMPData,
  radarSubtitlesItemCriminal,
} from './styles.module.css';
import RadarGraph from './RadarGraph';
import { useAppContext } from '../../../../../core/app/App.context';
import { RadarArrow } from '../../../../assets';
import { Spinner, SectionTitle } from '../../../../components/layoutPieces';
import {
  NORTH_LABEL_PROPS,
  WEST_LABEL_PROPS,
  SOUTH_WEST_LABEL_PROPS,
  SOUTH_EAST_LABEL_PROPS,
  EAST_LABEL_PROPS,
  TUTELA_CATEGORIES,
  PIP_CATEGORIES,
} from './radarConstants';
import RadarModal from './RadarModal';
import { Modal } from '../../../../components';

function PerformanceRadar() {
  const { currentOffice, buildRequestParams, Api } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [compareData, setCompareData] = useState([]);
  const [dataError, setError] = useState(false);
  const [isRadarModalOpen, setIsRadarModalOpen] = useState(false);
  const [radarModalData, setRadarModalData] = useState();
  const [selectedElement, setSelectedElement] = useState({});

  useEffect(() => {
    getPerformanceData();
  }, []);

  useEffect(() => {
    // so it doesn't run on mount
    if (compareData.length || compareData === 'error') {
      updateModalData();
    }
  }, [compareData]);

  async function getPerformanceData() {
    let res = {};
    const { tipo } = currentOffice;
    try {
      // tutela
      if (tipo === 1) {
        res = await Api.getRadarData(buildRequestParams());
      }
      if (tipo === 2) {
        // pip
        res = await Api.getPipRadarData(buildRequestParams());
      }
      if (tipo === 7) {
        // criminal
        res = await Api.getRadarDataCriminal(buildRequestParams());
      }
    } catch (e) {
      setError(true);
    } finally {
      const [uData, oData] = cleanGraphData(res);

      setUserData(uData);
      setOtherData(oData);
      generateLabels(res, tipo);
      setLoading(false);
    }
  }

  async function getCompareData() {
    setCompareData([]);
    const { tipo } = currentOffice;
    let res = [];
    try {
      res = await Api.getRadarCompareData({ ...buildRequestParams(), organType: tipo });
    } catch (e) {
      res = 'error';
    } finally {
      setCompareData(res);
    }
  }

  function updateModalData() {
    setRadarModalData({
      userData,
      chartLabels,
      otherData: compareData,
    });
  }

  function cleanGraphData(rawData) {
    const categories = Object.keys(rawData);

    if (categories) {
      return [generateUserData(categories, rawData), generateCompData(categories, rawData)];
    }
    return [[], []];
  }

  function generateUserData(categories, rawData) {
    return categories.map((cat) => ({
      x: cat,
      y: rawData[cat].percentages * 100,
      label: rawData[cat].numbers,
    }));
  }

  function generateCompData(categories, rawData) {
    return categories.map((cat) => {
      const { averages, maxValues } = rawData[cat];
      return { x: cat, y: 100 * (averages / (maxValues || 1)) };
    });
  }

  function generateLabels(graphData, organType) {
    let categories;
    switch (organType) {
      case 1:
        categories = TUTELA_CATEGORIES;
        break
      case 2:
        categories = PIP_CATEGORIES;
        break
      default:
        categories = Object.keys(graphData);
    }
    const labels = categories.map((cat) => {
      let positionProps;
      let label;
      const maxValues = graphData[cat] ? graphData[cat].maxValues : '-';
      switch (cat) {
        case 'archives':
          label = ['Arquivamentos', `(máx atribuição ${maxValues})`];
          positionProps = NORTH_LABEL_PROPS;
          break;
        case 'tac':
          label = ['Termos', 'de ajuste', 'de conduta', `(máx atribuição ${maxValues})`];
          positionProps = WEST_LABEL_PROPS;
          break;
        case 'agreements':
          label = ['Celebrações', 'de ANPP', `(máx atribuição ${maxValues})`];
          positionProps = WEST_LABEL_PROPS;
          break;
        case 'instaurations':
          label = [`(máx atribuição ${maxValues})`, 'Instauração de', 'Investigações'];
          positionProps = SOUTH_WEST_LABEL_PROPS;
          break;
        case 'openCases':
          label = [`(máx atribuição ${maxValues})`, 'Devoluções', 'à DP'];
          positionProps = SOUTH_WEST_LABEL_PROPS;
          break;
        case 'rejections':
          label = [`(máx atribuição ${maxValues})`, 'Indeferimentos', 'de plano'];
          positionProps = SOUTH_EAST_LABEL_PROPS;
          break;
        case 'precautionary':
          label = ['Medidas', 'Cautelares', `(máx atribuição ${maxValues})`];
          positionProps = SOUTH_EAST_LABEL_PROPS;
          break;
        case 'actions':
          label = ['Ações', 'civil', 'publicas', `(máx atribuição ${maxValues})`];
          positionProps = EAST_LABEL_PROPS;
          break;
        case 'complaints':
          label = [`(máx atribuição ${maxValues})`, 'Denúncias'];
          positionProps = NORTH_LABEL_PROPS;
          break;
        case 'hearings':
          label = [`(máx atribuição ${maxValues})`, 'Audiências'];
          positionProps = SOUTH_WEST_LABEL_PROPS;
          break;
        case 'closingArguments':
          label = [`(máx atribuição ${maxValues})`, 'Alegações finais'];
          positionProps = SOUTH_EAST_LABEL_PROPS;
          break;
        case 'appeals':
          label = [`(máx atribuição ${maxValues})`, 'Recursos'];
          positionProps = EAST_LABEL_PROPS;
          break;
        default:
          label = [''];
          positionProps = NORTH_LABEL_PROPS;
      }
      return { category: cat, label, ...positionProps };
    });
    setChartLabels(labels);
  }

  function handleCompareButton(event) {
    getCompareData();
    setSelectedElement(event.target);
    setIsRadarModalOpen(true);
  }

  if (isRadarModalOpen) {
    return (
      <Modal
        withExitButton
        previousElement={selectedElement}
        close={() => setIsRadarModalOpen(false)}
      >
        <RadarModal compareData={radarModalData} />
      </Modal>
    )
  }

  return (
    <article className={pageRadarDashboard}>
      <div className={radarHeader}>
        <SectionTitle value="Radar de Performance" subtitle="(últimos 180 dias)" glueToTop />
      </div>
      <div className={radarGraph}>
        {loading && !dataError && <Spinner size="large" />}

        {dataError && 'Sem dados para exibir'}

        {!loading && !dataError && (
          <figure className={radarWrapper}>
            <RadarGraph xAxis={chartLabels} userGraph={userData} comparisionGraph={otherData} />
          </figure>
        )}

        {currentOffice.tipo && (
          <figcaption className={radarSubtitles}>
            <div className={`${radarSubtitlesItem} ${radarSubtitlesItemYourData}`}>
              Sua Promotoria
            </div>
            <div className={`${radarSubtitlesItem} ${radarSubtitlesItemMPData}`}>Perfil do MP</div>
            <button type="button" onClick={handleCompareButton}
              className={currentOffice.tipo === 7 ? `${radarSubtitlesItemCriminal}` : `${radarSubtitlesItem} `}>
              <RadarArrow height={20} width={20} />
              Comparativo
            </button>
          </figcaption>
        )}
      </div>
    </article>
  );
}

export default PerformanceRadar;
