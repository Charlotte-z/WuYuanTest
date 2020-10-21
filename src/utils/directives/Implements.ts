import React, { useEffect } from 'react';

const RIF = (props: { [`r-if`]: any; children: any }) =>
  props[`r-if`] ? props.children : null;

export { RIF };
