'use client'

import { useRouter } from "next/navigation";

import { SortBySpecification } from "@/Type/SortBySpecification";
import { SortByType } from "@/Type/SortByType";

type Props = {
  productsLength: number;
  specParam: string;
  typeParam: string;
}

const Dropdowns: React.FC<Props> = ({
  productsLength,
  specParam,
  typeParam,
}) => {
  const router = useRouter();

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    router.push(`?type=${selectedValue}&specification=${specParam}`);
  };

  const handleChangeSpec = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    router.push(`?type=${typeParam}&specification=${selectedValue}`);
  };

  return (
    <div className="dropdowns my-5 d-flex align-items-center">
      <h1 className="m-0">{`Products / ${productsLength}`}</h1>
      <div className="d-flex p-0 mx-4 align-items-center">
        <p className="m-0 p-0">Type:</p>
        <select
          value={typeParam}
          onChange={handleChangeType}
          className="dropdowns__sort"
          data-cy="paginationLeft"
        >
          <option defaultValue="default" disabled >none</option>
          <option value={SortByType.MOTHERBOARD}>{SortByType.MOTHERBOARD}</option>
          <option value={SortByType.GRAPHIC_CARD}>{SortByType.GRAPHIC_CARD}</option>
          <option value={SortByType.MONITORS}>{SortByType.MONITORS}</option>
        </select>
      </div>
      <div className="d-flex p-0 mx-4 align-items-center">
        <p className="m-0 p-0">Specification:</p>
        <select
          value={specParam}
          onChange={handleChangeSpec}
          className="dropdowns__sort"
          data-cy="paginationLeft"
        >
          <option defaultValue="default" disabled >none</option>
          <option value={SortBySpecification.NEW}>{SortBySpecification.NEW}</option>
          <option value={SortBySpecification.USED}>{SortBySpecification.USED}</option>
        </select>
      </div>
    </div>
  );
}

export default Dropdowns