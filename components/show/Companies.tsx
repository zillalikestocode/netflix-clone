const Companies = ({ details }: any) => {
  const companies: any = details.production_companies;
  return (
    <div className="space-y-3">
      <h4>Production Companies</h4>
      <div className="space-y-3">
        {companies.map((item: any, i: any) => {
          return item.logo_path ? (
            <img
              className="h-32 bg-white"
              src={`http://image.tmdb.org/t/p/w300/${item.logo_path}`}
            />
          ) : (
            <h4 className="text-white text-3xl">{item.name}</h4>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
