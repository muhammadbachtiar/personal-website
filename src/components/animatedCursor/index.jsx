import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {

  return (
    <AnimatedCursor
    innerSize={12}
    outerSize={28}
    color='90, 177, 214'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={3}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
  />
  );
};

export default Cursor;
