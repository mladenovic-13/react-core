import Pet from "./Pet";

// We can destructur props by putting object as argument
const Results = ({ pets }) => {
  return (
    <div className="search">
      {
        // Conditional rendering
        !pets.length ? (
          <h2>No Pets Found</h2>
        ) : (
          pets.map((pet) => (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          ))
        )
      }
    </div>
  );
};

export default Results;
