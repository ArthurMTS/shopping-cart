import loaderIcon from '../../assets/loader.svg';

import './styles.css';

export function Loading() {
  return (
    <div id='loading'>
      <img src={loaderIcon} alt='loading icon' />
      Loading
    </div>
  );
}