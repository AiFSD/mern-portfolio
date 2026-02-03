import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I create user-friendly applications with a strong focus on reusability and simple logic.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I specialize in React, building interfaces that stay clean, intuitive, and never boring.',
        1000,
        'I create with passion, always aiming for experiences that feel natural to use and easy to maintain.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default ExampleComponent;