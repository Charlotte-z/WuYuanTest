const RIF = (props: { condition: any; children: any }) =>
  props.condition ? props.children : null;

export { RIF };
