import './infotab.css';

function InfoTab({ TabIcon, title, subtitle, index }) {
//   const color = index % 2 === 0 ? 'var(--app-blue-opaque)' : 'white';
//   const fontColor = index % 2 === 0 ? 'var(--app-blue)' : 'black';

  return (
    <div className="info-Tab" style={{}}>
      {TabIcon}
      <div className="info-tab-title-subtitle">
        <p className='info-tab-title' >{`${title} `}</p>
        <p style={{ fontWeight: '300',color:'var(--app-font)' }}>{subtitle}</p>
      </div>
    </div>
  );
}

export default InfoTab;
