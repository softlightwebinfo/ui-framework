import React, {PureComponent} from 'react';
import classNames from 'classnames';

import addDataApp from './assets/app_add_data';
import advancedSettingsApp from './assets/app_advanced_settings';
import alert from './assets/alert';
import apmApp from './assets/app_apm';
import apmTrace from './assets/apm_trace';
import apps from './assets/apps';
import arrowDown from './assets/arrow_down';
import arrowLeft from './assets/arrow_left';
import arrowRight from './assets/arrow_right';
import arrowUp from './assets/arrow_up';
import asterisk from './assets/asterisk';
import auditbeatApp from './assets/app_auditbeat';
import beaker from './assets/beaker';
import bell from './assets/bell';
import bolt from './assets/bolt';
import boxesHorizontal from './assets/boxes_horizontal';
import boxesVertical from './assets/boxes_vertical';
import branch from './assets/branch';
import broom from './assets/broom';
import brush from './assets/brush';
import bug from './assets/bug';
import bullseye from './assets/bullseye';
import calendar from './assets/calendar';
import canvasApp from './assets/app_canvas';
import codeApp from './assets/app_code';
import check from './assets/check';
import checkNew from './assets/check_new';
import checkInCircleFilled from './assets/checkInCircleFilled';
import clock from './assets/clock';
import close from './assets/close';
import compute from './assets/compute';
import console from './assets/console';
import consoleApp from './assets/app_console';
import controlsHorizontal from './assets/controls_horizontal';
import controlsVertical from './assets/controls_vertical';
import copy from './assets/copy';
import copyClipboard from './assets/copy_clipboard';
import createAdvancedJob from './assets/ml_create_advanced_job';
import createMultiMetricJob from './assets/ml_create_multi_metric_job';
import createPopulationJob from './assets/ml_create_population_job';
import createSingleMetricJob from './assets/ml_create_single_metric_job';
import cross from './assets/cross';
import crossClusterReplicationApp from './assets/app_cross_cluster_replication';
import crosshairs from './assets/crosshairs';
import crossInACircleFilled from './assets/crossInACircleFilled';
import cut from './assets/cut';
import dashboardApp from './assets/app_dashboard';
import database from './assets/database';
import dataVisualizer from './assets/ml_data_visualizer';
import devToolsApp from './assets/app_devtools';
import discoverApp from './assets/app_discover';
import document from './assets/document';
import dot from './assets/dot';
import editorAlignCenter from './assets/editor_align_center';
import editorAlignLeft from './assets/editor_align_left';
import editorAlignRight from './assets/editor_align_right';
import editorBold from './assets/editor_bold';
import editorCodeBlock from './assets/editor_code_block';
import editorComment from './assets/editor_comment';
import editorHeading from './assets/editor_heading';
import editorItalic from './assets/editor_italic';
import editorLink from './assets/editor_link';
import editorOrderedList from './assets/editor_ordered_list';
import editorRedo from './assets/editor_redo';
import editorStrike from './assets/editor_strike';
import editorTable from './assets/editor_table';
import editorUnderline from './assets/editor_underline';
import editorUndo from './assets/editor_undo';
import editorUnorderedList from './assets/editor_unordered_list';
import email from './assets/email';
import empty from './assets/empty';
import emsApp from './assets/app_ems';
import exit from './assets/exit';
import expand from './assets/expand';
import exportAction from './assets/export';
import eye from './assets/eye';
import eyeClosed from './assets/eye_closed';
import faceHappy from './assets/face_happy';
import faceNeutral from './assets/faceNeutral';
import faceSad from './assets/face_sad';
import filebeatApp from './assets/app_filebeat';
import filter from './assets/filter';
import flag from './assets/flag';
import folderClosed from './assets/folder_closed';
import folderOpen from './assets/folder_open';
import fullScreen from './assets/full_screen';
import gear from './assets/gear';
import gisApp from './assets/app_gis';
import glasses from './assets/glasses';
import globe from './assets/globe';
import grab from './assets/grab';
import grabHorizontal from './assets/grab_horizontal';
import graphApp from './assets/app_graph';
import grid from './assets/grid';
import grokApp from './assets/app_grok';
import heart from './assets/heart';
import heartbeatApp from './assets/app_heartbeat';
import heatmap from './assets/heatmap';
import help from './assets/help';
import iInCircle from './assets/iInCircle';
import importAction from './assets/import';
import indexClose from './assets/index_close';
import indexEdit from './assets/index_edit';
import indexFlush from './assets/index_flush';
import indexManagementApp from './assets/app_index_management';
import indexMapping from './assets/index_mapping';
import indexOpen from './assets/index_open';
import indexPatternApp from './assets/app_index_pattern';
import indexRollupApp from './assets/app_index_rollup';
import indexSettings from './assets/index_settings';
import infraApp from './assets/app_infra';
import inputOutput from './assets/inputOutput';
import inspect from './assets/inspect';
import invert from './assets/invert';
import kqlField from './assets/kql_field';
import kqlFunction from './assets/kql_function';
import kqlOperand from './assets/kql_operand';
import kqlSelector from './assets/kql_selector';
import kqlValue from './assets/kql_value';
import link from './assets/link';
import list from './assets/list';
import listAdd from './assets/list_add';
import lock from './assets/lock';
import lockOpen from './assets/lockOpen';
import loggingApp from './assets/app_logging';
import logoAerospike from './assets/logo_aerospike';
import logoApache from './assets/logo_apache';
import logoAPM from './assets/logo_apm';
import logoAppSearch from './assets/logo_app_search';
import logoAWS from './assets/logo_aws';
import logoAWSMono from './assets/logo_aws_mono';
import logoAzure from './assets/logo_azure';
import logoAzureMono from './assets/logo_azure_mono';
import logoBeats from './assets/logo_beats';
import logoBusinessAnalytics from './assets/logo_business_analytics';
import logoCeph from './assets/logo_ceph';
import logoCloud from './assets/logo_cloud';
import logoCloudEnterprise from './assets/logo_cloud_ece';
import logoCodesandbox from './assets/logo_codesandbox';
import logoCouchbase from './assets/logo_couchbase';
import logoDocker from './assets/logo_docker';
import logoDropwizard from './assets/logo_dropwizard';
import logoElastic from './assets/logo_elastic';
import logoElasticsearch from './assets/logo_elasticsearch';
import logoElasticStack from './assets/logo_elastic_stack';
import logoEnterpriseSearch from './assets/logo_enterprise_search';
import logoEtcd from './assets/logo_etcd';
import logoGCP from './assets/logo_gcp';
import logoGCPMono from './assets/logo_gcp_mono';
import logoGithub from './assets/logo_github';
import logoGmail from './assets/logo_gmail';
import logoGolang from './assets/logo_golang';
import logoHAproxy from './assets/logo_haproxy';
import logoIBM from './assets/logo_ibm';
import logoIBMMono from './assets/logo_ibm_mono';
import logoKafka from './assets/logo_kafka';
import logoKibana from './assets/logo_kibana';
import logoKubernetes from './assets/logo_kubernetes';
import logoLogstash from './assets/logo_logstash';
import logoMemcached from './assets/logo_memcached';
import logoMetrics from './assets/logo_metrics';
import logoMongodb from './assets/logo_mongodb';
import logoMySQL from './assets/logo_mysql';
import logoNginx from './assets/logo_nginx';
import logoOsquery from './assets/logo_osquery';
import logoPhp from './assets/logo_php';
import logoPostgres from './assets/logo_postgres';
import logoPrometheus from './assets/logo_prometheus';
import logoRabbitmq from './assets/logo_rabbitmq';
import logoRedis from './assets/logo_redis';
import logoSiteSearch from './assets/logo_site_search';
import logoSketch from './assets/logo_sketch';
import logoSlack from './assets/logo_slack';
import logoWebhook from './assets/logo_webhook';
import logoWindows from './assets/logo_windows';
import logoXpack from './assets/logo_xpack';
import logstashFilter from './assets/logstash_filter';
import logstashIf from './assets/logstash_if';
import logstashInput from './assets/logstash_input';
import logstashOutput from './assets/logstash_output';
import logstashQueue from './assets/logstash_queue';
import machineLearningApp from './assets/app_ml';
import managementApp from './assets/app_management';
import mapMarker from './assets/map_marker';
import memory from './assets/memory';
import merge from './assets/merge';
import menuLeft from './assets/menuLeft';
import menuRight from './assets/menuRight';
import metricbeatApp from './assets/app_metricbeat';
import minusInCircle from './assets/minus_in_circle';
import minusInCircleFilled from './assets/minus_in_circle_filled';
import monitoringApp from './assets/app_monitoring';
import moon from './assets/moon';
import node from './assets/node';
import notebookApp from './assets/app_notebook';
import number from './assets/number';
import offline from './assets/offline';
import online from './assets/online';
import packetbeatApp from './assets/app_packetbeat';
import pause from './assets/pause';
import pencil from './assets/pencil';
import pin from './assets/pin';
import pinFilled from './assets/pin_filled';
import pipelineApp from './assets/app_pipeline';
import play from './assets/play';
import plusInCircle from './assets/plus_in_circle';
import plusInCircleFilled from './assets/plus_in_circle_filled';
import popout from './assets/popout';
import questionInCircle from './assets/question_in_circle';
import refresh from './assets/refresh';
import reportingApp from './assets/app_reporting';
import save from './assets/save';
import savedObjectsApp from './assets/app_saved_objects';
import scale from './assets/scale';
import search from './assets/search';
import searchProfilerApp from './assets/app_search_profiler';
import securityAnalyticsApp from './assets/app_security_analytics';
import securityApp from './assets/app_security';
import shard from './assets/shard';
import share from './assets/share';
import snowflake from './assets/snowflake';
import sortable from './assets/sortable';
import sortDown from './assets/sort_down';
import sortLeft from './assets/sortLeft';
import sortRight from './assets/sortRight';
import sortUp from './assets/sort_up';
import spacesApp from './assets/app_spaces';
import sqlApp from './assets/app_sql';
import starEmpty from './assets/star_empty';
import starEmptySpace from './assets/star_empty_space';
import starFilled from './assets/star_filled';
import starFilledSpace from './assets/star_filled_space';
import starMinusEmpty from './assets/star_minus_empty';
import starMinusFilled from './assets/star_minus_filled';
import starPlusEmpty from './assets/starPlusEmpty';
import starPlusFilled from './assets/starPlusFilled';
import stats from './assets/stats';
import stop from './assets/stop';
import stopFilled from './assets/stop_filled';
import storage from './assets/storage';
import string from './assets/string';
import submodule from './assets/submodule';
import symlink from './assets/symlink';
import tableOfContents from './assets/tableOfContents';
import tag from './assets/tag';
import tear from './assets/tear';
import temperature from './assets/temperature';
import timelionApp from './assets/app_timelion';
import trash from './assets/trash';
import upgradeAssistantApp from './assets/app_upgrade_assistant';
import uptimeApp from './assets/app_uptime';
import user from './assets/user';
import usersRolesApp from './assets/app_users_roles';
import vector from './assets/vector';
import visArea from './assets/vis_area';
import visBarHorizontal from './assets/vis_bar_horizontal';
import visBarVertical from './assets/vis_bar_vertical';
import visControls from './assets/vis_controls';
import visGauge from './assets/vis_gauge';
import visGoal from './assets/vis_goal';
import visHeatmap from './assets/vis_heatmap';
import visLine from './assets/vis_line';
import visMapCoordinate from './assets/vis_map_coordinate';
import visMapRegion from './assets/vis_map_region';
import visMetric from './assets/vis_metric';
import visPie from './assets/vis_pie';
import visTable from './assets/vis_table';
import visTagCloud from './assets/vis_tag_cloud';
import visText from './assets/vis_text';
import visTimelion from './assets/vis_timelion';
import visualizeApp from './assets/app_visualize';
import visVega from './assets/vis_vega';
import visVisualBuilder from './assets/vis_visual_builder';
import watchesApp from './assets/app_watches';
import wrench from './assets/wrench';
import chat from './assets/chat';
import comments from './assets/comments';
import like from './assets/like';
import dislike from './assets/dislike';
import favorite from './assets/favorite';
import share2 from './assets/share2';
import flag2 from './assets/flag2';
import reply2 from './assets/reply2';
import eye2 from './assets/eye2';
import user2 from './assets/user2';
import exit2 from './assets/exit2';
import enter2 from './assets/enter2';
import levelup from './assets/levelup';
import send from './assets/send';
import contact from './assets/contact';
import notification from './assets/notification';
import notificationBlack from './assets/notification_black';
import cloud from './assets/cloud';
import setting from './assets/setting';
import trendingDown from './assets/trendingDown';
import trendingUp from './assets/trendingUp';
import arrowUp2 from './assets/arrowUp2';
import arrowDown2 from './assets/arrowDown2';
import arrowLeft2 from './assets/arrowLeft2';
import moreHoriz from './assets/moreHoriz';
import moreVert from './assets/moreVert';
import important from './assets/important';
import tambor from './assets/tambor';
import blogs from './assets/blogs';
import seo from './assets/seo';
import multiUser from './assets/multiUser';

// Token Icon Imports
import tokenClass from './assets/tokens/tokenClass';
import tokenProperty from './assets/tokens/tokenProperty';
import tokenEnum from './assets/tokens/tokenEnum';
import tokenVariable from './assets/tokens/tokenVariable';
import tokenMethod from './assets/tokens/tokenMethod';
import tokenAnnotation from './assets/tokens/tokenAnnotation';
import tokenException from './assets/tokens/tokenException';
import tokenInterface from './assets/tokens/tokenInterface';
import tokenParameter from './assets/tokens/tokenParameter';
import tokenField from './assets/tokens/tokenField';
import tokenElement from './assets/tokens/tokenElement';
import tokenFunction from './assets/tokens/tokenFunction';
import tokenBoolean from './assets/tokens/tokenBoolean';
import tokenString from './assets/tokens/tokenString';
import tokenArray from './assets/tokens/tokenArray';
import tokenNumber from './assets/tokens/tokenNumber';
import tokenConstant from './assets/tokens/tokenConstant';
import tokenObject from './assets/tokens/tokenObject';
import tokenEvent from './assets/tokens/tokenEvent';
import tokenKey from './assets/tokens/tokenKey';
import tokenNull from './assets/tokens/tokenNull';
import tokenStruct from './assets/tokens/tokenStruct';
import tokenPackage from './assets/tokens/tokenPackage';
import tokenOperator from './assets/tokens/tokenOperator';
import tokenEnumMember from './assets/tokens/tokenEnumMember';
import tokenRepo from './assets/tokens/tokenRepo';
import tokenSymbol from './assets/tokens/tokenSymbol';
import tokenFile from './assets/tokens/tokenFile';
import tokenModule from './assets/tokens/tokenModule';
import tokenNamespace from './assets/tokens/tokenNamespace';
import {keysOf} from "../common";


const typeToIconMap = {
    tambor,
    blogs,
    seo,
    multiUser,
    moreHoriz,
    important,
    moreVert,
    arrowLeft2,
    arrowDown2,
    arrowUp2,
    trendingUp,
    trendingDown,
    setting,
    notification,
    cloud,
    notificationBlack,
    send,
    contact,
    checkNew,
    exit2,
    levelup,
    enter2,
    user2,
    eye2,
    addDataApp,
    share2,
    flag2,
    reply2,
    advancedSettingsApp,
    alert,
    apmApp,
    chat,
    comments,
    apmTrace,
    apps,
    arrowDown,
    arrowLeft,
    arrowRight,
    arrowUp,
    asterisk,
    auditbeatApp,
    beaker,
    bell,
    bolt,
    boxesHorizontal,
    boxesVertical,
    branch,
    broom,
    brush,
    bug,
    bullseye,
    calendar,
    close,
    canvasApp,
    codeApp,
    check,
    checkInCircleFilled,
    clock,
    compute,
    console,
    consoleApp,
    controlsHorizontal,
    controlsVertical,
    copy,
    copyClipboard,
    createAdvancedJob,
    createMultiMetricJob,
    createPopulationJob,
    createSingleMetricJob,
    cross,
    crossClusterReplicationApp,
    crosshairs,
    crossInACircleFilled,
    cut,
    dashboardApp,
    database,
    dataVisualizer,
    devToolsApp,
    discoverApp,
    document,
    dot,
    dislike,
    favorite,
    editorAlignCenter,
    editorAlignLeft,
    editorAlignRight,
    editorBold,
    editorCodeBlock,
    editorComment,
    editorHeading,
    editorItalic,
    editorLink,
    editorOrderedList,
    editorRedo,
    editorStrike,
    editorTable,
    editorUnderline,
    editorUndo,
    editorUnorderedList,
    email,
    empty,
    emsApp,
    exit,
    expand,
    exportAction,
    eye,
    eyeClosed,
    faceHappy,
    faceNeutral,
    faceSad,
    filebeatApp,
    filter,
    flag,
    folderClosed,
    folderOpen,
    fullScreen,
    gear,
    gisApp,
    glasses,
    globe,
    grab,
    grabHorizontal,
    graphApp,
    grid,
    grokApp,
    heart,
    heartbeatApp,
    heatmap,
    help,
    iInCircle,
    importAction,
    indexClose,
    indexEdit,
    indexFlush,
    indexManagementApp,
    indexMapping,
    indexOpen,
    indexPatternApp,
    indexRollupApp,
    indexSettings,
    infraApp,
    inputOutput,
    inspect,
    invert,
    kqlField,
    kqlFunction,
    kqlOperand,
    kqlSelector,
    kqlValue,
    link,
    list,
    listAdd,
    lock,
    lockOpen,
    loggingApp,
    logoAerospike,
    logoApache,
    logoAPM,
    logoAppSearch,
    logoAWS,
    logoAWSMono,
    logoAzure,
    logoAzureMono,
    logoBeats,
    logoBusinessAnalytics,
    logoCeph,
    logoCloud,
    logoCloudEnterprise,
    logoCodesandbox,
    logoCouchbase,
    logoDocker,
    logoDropwizard,
    logoElastic,
    logoElasticsearch,
    logoElasticStack,
    logoEnterpriseSearch,
    logoEtcd,
    logoGCP,
    logoGCPMono,
    logoGithub,
    logoGmail,
    logoGolang,
    logoHAproxy,
    logoIBM,
    logoIBMMono,
    logoKafka,
    logoKibana,
    logoKubernetes,
    logoLogstash,
    logoMemcached,
    logoMetrics,
    logoMongodb,
    logoMySQL,
    logoNginx,
    logoOsquery,
    logoPhp,
    logoPostgres,
    logoPrometheus,
    logoRabbitmq,
    logoRedis,
    logoSiteSearch,
    logoSketch,
    logoSlack,
    logoWebhook,
    logoWindows,
    logoXpack,
    logstashFilter,
    logstashIf,
    logstashInput,
    logstashOutput,
    logstashQueue,
    like,
    machineLearningApp,
    managementApp,
    mapMarker,
    memory,
    merge,
    menuLeft,
    menuRight,
    metricbeatApp,
    minusInCircle,
    minusInCircleFilled,
    monitoringApp,
    moon,
    node,
    notebookApp,
    number,
    offline,
    online,
    packetbeatApp,
    pause,
    pencil,
    pin,
    pipelineApp,
    play,
    plusInCircle,
    plusInCircleFilled,
    popout,
    questionInCircle,
    refresh,
    reportingApp,
    save,
    savedObjectsApp,
    scale,
    search,
    searchProfilerApp,
    securityAnalyticsApp,
    securityApp,
    shard,
    share,
    snowflake,
    sortable,
    sortDown,
    sortLeft,
    sortRight,
    sortUp,
    spacesApp,
    sqlApp,
    starEmpty,
    starEmptySpace,
    starFilled,
    starFilledSpace,
    starMinusEmpty,
    starMinusFilled,
    starPlusEmpty,
    starPlusFilled,
    stats,
    stop,
    stopFilled,
    storage,
    string,
    submodule,
    symlink,
    tableOfContents,
    tag,
    tear,
    temperature,
    timelionApp,
    tokenAnnotation,
    tokenArray,
    tokenBoolean,
    tokenClass,
    tokenConstant,
    tokenElement,
    tokenEnum,
    tokenEnumMember,
    tokenEvent,
    tokenException,
    tokenField,
    tokenFile,
    tokenFunction,
    tokenInterface,
    tokenKey,
    tokenMethod,
    tokenModule,
    tokenNamespace,
    tokenNull,
    tokenNumber,
    tokenObject,
    tokenOperator,
    tokenPackage,
    tokenParameter,
    tokenProperty,
    tokenRepo,
    tokenString,
    tokenStruct,
    tokenSymbol,
    tokenVariable,
    trash,
    upgradeAssistantApp,
    pinFilled,
    uptimeApp,
    user,
    usersRolesApp,
    vector,
    visArea,
    visBarHorizontal,
    visBarVertical,
    visControls,
    visGauge,
    visGoal,
    visHeatmap,
    visLine,
    visMapCoordinate,
    visMapRegion,
    visMetric,
    visPie,
    visTable,
    visTagCloud,
    visText,
    visTimelion,
    visualizeApp,
    visVega,
    visVisualBuilder,
    watchesApp,
    wrench,
};

// @ts-ignore
export const TYPES: IconType[] = keysOf(typeToIconMap);

export type IconType = keyof typeof typeToIconMap;

const colorToClassMap = {
    default: null,
    primary: 'softIcon--primary',
    secondary: 'softIcon--secondary',
    success: 'softIcon--success',
    accent: 'softIcon--accent',
    warning: 'softIcon--warning',
    danger: 'softIcon--danger',
    text: 'softIcon--text',
    subdued: 'softIcon--subdued',
    ghost: 'softIcon--ghost',
};

// @ts-ignore
export const COLORS: NamedColor[] = keysOf(colorToClassMap);

type NamedColor = keyof typeof colorToClassMap;

function isNamedColor(name: string): name is NamedColor {
    return colorToClassMap.hasOwnProperty(name);
}

// We accept arbitrary color strings, which are impossible to type.
export type IconColor = string | NamedColor;

const sizeToClassNameMap = {
    original: null,
    s: 'softIcon--small',
    m: 'softIcon--medium',
    l: 'softIcon--large',
    xl: 'softIcon--xLarge',
    xxl: 'softIcon--xxLarge',
};

// @ts-ignore
export const SIZES: IconSize[] = keysOf(sizeToClassNameMap);

export type IconSize = keyof typeof sizeToClassNameMap;

export interface IconProps {
    type?: IconType;
    /**
     * One of EUI's color palette or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
     */
    color?: IconColor;
    size?: IconSize;
}


export class Icon extends PureComponent<{
    title?: any, type?: any, size?: string, color?: any, className?: any, tabIndex?: any, href?: string,
}> {
    static defaultProps = {size: 'm'};

    render() {
        let {
            type,
            size,
            color,
            className,
            tabIndex,
            ...rest
        } = this.props;
        let optionalColorClass = null;
        let optionalCustomStyles = null;

        if (color) {
            if (isNamedColor(color)) {
                optionalColorClass = colorToClassMap[color];
            } else {
                optionalCustomStyles = {fill: color};
            }
        }

        // These icons are a little special and get some extra CSS flexibility
        const isAppIcon =
            type &&
            (/.+App$/.test(type) || /.+Job$/.test(type) || type === 'dataVisualizer');

        const classes = classNames(
            'softIcon',
            sizeToClassNameMap[size],
            optionalColorClass,
            {
                'softIcon--app': isAppIcon,
            },
            className
        );

        const Svg = (type && typeToIconMap[type]) || empty;

        // This is a fix for IE and Edge, which ignores tabindex="-1" on an SVG, but respects
        // focusable="false".
        //   - If there's no tab index specified, we'll default the icon to not be focusable,
        //     which is how SVGs behave in Chrome, Safari, and FF.
        //   - If tab index is -1, then the consumer wants the icon to not be focusable.
        //   - For all other values, the consumer wants the icon to be focusable.
        const focusable = tabIndex == null || tabIndex === -1 ? 'false' : 'true';
        return (
            <Svg
                className={classes}
                style={optionalCustomStyles}
                tabIndex={tabIndex}
                focusable={focusable}
                {...rest}
            />
        );
    }
}
