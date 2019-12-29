export default {
  type: 'object',
  additionalProperties: false,
  properties: {
    env: {
      description:
        'set the environment to decide how to handle `console.xxx()` code',
      type: 'string',
    },
    removeMethods: {
      description:
        'set what method to remove in production environment, default to all',
      type: 'array',
      items: {
        description:
          'method name or function to decide whether remove the code',
        oneOf: [
          {
            type: 'string',
          },
          {
            instanceof: 'Function',
          },
        ],
      },
    },
    additionalStyleMethods: {
      description:
        'some method to extend the console object which can be invoked by console.xxx() in non-production environment',
      type: 'object',
      additionalProperties: true,
    },
  },
  required: ['env'],
};
