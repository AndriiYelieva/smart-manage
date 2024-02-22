'use client'
import Link from "next/link"
import clsx from 'clsx';
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export const NavigationMenu = () => {
  const names = ['orders', 'groups', 'products', 'users']
  const pathname = usePathname();

  return (
    <>
      <nav className="col-2 shadow">
        <ul>
          <li className="mt-5 mb-5 text-uppercase list-unstyled d-flex justify-content-center position-relative">
            <Image loading="lazy" src="/user.svg" alt="Icon" width={100} height={100} />
            <button className="position-absolute bottom-0 end-50 rounded-circle border-0">
              <Image loading="lazy" src="/gear-fill.svg" alt="Icon" width={20} height={30} />
            </button>
          </li>

          {names.map(name => {
            return (
              <li className="mt-4 text-uppercase list-unstyled d-flex justify-content-center" key={name}>
                <Link href={`/${name}`} className={clsx('text-decoration-none text-dark fw-bold link', {
                  'link-active': pathname === `/${name}`
                })}>
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <style>{`
        .link {
          border-bottom: 4px solid white;
          transition: all 0.4s;
        }
        .link:hover {
          color: greenyellow !important;
        }
        .link-active {
          border-bottom: 4px solid yellowgreen;
        }
      `}</style>
    </>

  )
}
