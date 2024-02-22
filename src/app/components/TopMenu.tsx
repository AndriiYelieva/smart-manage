import style from '@/app/page.module.css'
import CurrentDate from './CurrentDate';
import Image from 'next/image';

export const TopMenu = () => {
  return (
    <header className=".container-fluid shadow">
      <div className={style.header}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex align-items-center">
              <Image src="/user-header.svg" alt="Icon" width={50} height={50} />
              <p className="m-4 text-success font-weight-bold">INVENTORY</p>
            </div>
            <div className="col-md-7">
              <CurrentDate />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};
