import './Imagen.css'

const Imagen=({img, alt, type})=>{


  return (
    <>
      {type === 'logo' ? (
        <div className="fares">
          <img src={img} alt={alt} />
          <h2>Fares</h2>
        </div>
      ): <img src={img} alt={alt} />}
    </>
  );
};
export default Imagen;