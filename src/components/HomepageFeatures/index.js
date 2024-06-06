import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '主控板',
    Svg: require('@site/static/img/mainboard.png').default,
    description: (
      <>
        精确控制您的3D打印机核心，支持Klipper，RRF，Marlin等固件提供卓越的稳定性和兼容性，确保每次打印都完美无瑕。
      </>
    ),
  }, {
    title: '上位机',
    Svg: require('@site/static/img/sbc.png').default,
    description: (
      <>
        作为3D打印机的大脑，上位机提供强大的数据处理能力和控制功能，确保高效高速精准的打印体验。
      </>
    ),
  },
  {
    title: '工具头板',
    Svg: require('@site/static/img/toolboard.png').default,
    description: (
      <>
        专为各种打印机型适配的高兼容工具头板，轻松连接CANBus，RS232，USB等通信协议，实现多样化打印。
      </>
    ),
  },
  {
    title: '显示屏',
    Svg: require('@site/static/img/screen.png').default,
    description: (
      <>
        高清触摸屏界面，直观操作，实时监控打印状态，无线多控群控让每个打印机尽在掌控。
      </>
    ),
  }, {
    title: '扩展板',
    Svg: require('@site/static/img/extensionboard.png').default,
    description: (
      <>
        增强您的3D打印机功能，轻松扩展连接更多传感器和附件，实现无限可能。
      </>
    ),
  }, {
    title: '模块 & 驱动',
    Svg: require('@site/static/img/drive.png').default,
    description: (
      <>
        各种专业模块和驱动器，优化打印机性能，提升打印精度和速度，为您的项目提供最佳支持。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
