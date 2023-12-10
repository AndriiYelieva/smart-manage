/* eslint-disable @next/next/no-img-element */
import style from '@/app/page.module.css'
import CurrentDate from './CurrentDate';

export const TopMenu = () => {
  return (
    <header className=".container-fluid shadow">
      <div className={style.header}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex align-items-center">
              <img src="../../../public/img/user-header.svg" alt="Icon" width={50} height={50} />
              <p className="m-4 text-success font-weight-bold">INVENTORY</p>
              <div className="input-group">
                <input type="text" className="form-control rounded" placeholder="Search.." />
              </div>
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
