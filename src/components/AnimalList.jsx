
function ListAnimals({ animal }) {
  if (!animal) {
    return <div>loading..</div>;
  }
  const animalsFiltered = animal.filter((animal) => {
   return animal.name.startsWith("a");
  });
  if (animalsFiltered.length === 0) {
    return <div>no animals found</div>;
  }

  return (
    <ul>
      {animalsFiltered.map((animal) => {
       return <li key={animal.id}>key:{animal.id} name:{animal.name}</li>;
      })}
    </ul>
  );
}

export default ListAnimals;
