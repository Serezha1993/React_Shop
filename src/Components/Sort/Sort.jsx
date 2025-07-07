import "./sort.scss";

export const Sort = ({ handleChangeFilters, sort }) => {
  return (
    <div className="sort">
      <span>Сортировка по цене:</span>
      <span
        onClick={() => handleChangeFilters("sort", "asc")}
        className={sort === "asc" ? "sortActive" : ""}
      >
        По возрастанию
      </span>
      <span
        onClick={() => handleChangeFilters("sort", "desc")}
        className={sort === "desc" ? "sortActive" : ""}
      >
        По убыванию
      </span>
    </div>
  );
};
