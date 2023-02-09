function CarouselIndicator({ title, index }) {
  return (
    <button
      type='button'
      data-bs-target='#project-carousel'
      data-bs-slide-to={index}
      aria-label={title}
      aria-current={index === 0 ? 'true' : ''}
      className={index === 0 ? 'active' : ''}
    ></button>
  );
}

export default CarouselIndicator;
