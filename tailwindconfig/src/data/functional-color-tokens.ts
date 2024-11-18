type Color = string | [string, string];

export type FunctionalConfig = {
  backgroundColor: {
    current: Color;
    transparent: Color;
    "neutral-background": {
      low: Color;
      medium: Color;
      high: Color;
      "interactive-default": Color;
      "interactive-disabled": Color;
      "interactive-hover": Color;
    };
    "primary-background": {
      high: Color;
      medium: Color;
      low: Color;
      "interactive-default": Color;
      "interactive-hover": Color;
      "interactive-active": Color;
    };
    "accent1-background": {
      high: Color;
      medium: Color;
      low: Color;
      "interactive-default": Color;
      "interactive-hover": Color;
      "interactive-active": Color;
    };
    "accent2-background": {
      high: Color;
      medium: Color;
      low: Color;
    };
    "accent3-background": {
      high: Color;
      medium: Color;
      low: Color;
      "interactive-default": Color;
    };
  };
  textColor: {
    current: "currentColor";
    transparent: "transparent";
    "neutral-text": {
      high: Color;
      medium: Color;
      inverse: Color;
      "light-onbackground": Color;
      "dark-onbackground": Color;
      "interactive-disabled": Color;
    };
    "primary-text": {
      high: Color;
      "interactive-default": Color;
      "interactive-hover": Color;
      "interactive-active": Color;
    };
    "accent1-text": {
      high: Color;
    };
    "accent3-text": {
      high: Color;
    };
    "accent2-text": {
      high: Color;
    };
  };
  borderColor: {
    current: "currentColor";
    transparent: "transparent";
    "neutral-border": {
      high: Color;
      medium: Color;
      low: Color;
      "interactive-disabled": Color;
    };
    "primary-border": {
      high: Color;
      "interactive-default": Color;
      "interactive-hover": Color;
      "interactive-active": Color;
    };
    "promo-border": {
      high: Color;
    };
    "select-border": {
      high: Color;
    };
    "accent1-border": {
      high: Color;
    };
    "accent3-border": {
      high: Color;
    };
    "accent2-border": {
      high: Color;
    };
  };
};

export const purpleFunctionalConfig: FunctionalConfig = {
  backgroundColor: {
    current: "purple",
    transparent: "purple",
    "neutral-background": {
      low: "purple",
      medium: "purple",
      high: "purple",
      "interactive-default": "purple",
      "interactive-disabled": "purple",
      "interactive-hover": "purple",
    },
    "primary-background": {
      high: "purple",
      medium: "purple",
      low: "purple",
      "interactive-default": "purple",
      "interactive-hover": "purple",
      "interactive-active": "purple",
    },
    "accent1-background": {
      high: "purple",
      medium: "purple",
      low: "purple",
      "interactive-default": "purple",
      "interactive-hover": "purple",
      "interactive-active": "purple",
    },
    "accent2-background": {
      high: "purple",
      medium: "purple",
      low: "purple",
    },
    "accent3-background": {
      high: "purple",
      medium: "purple",
      low: "purple",
      "interactive-default": "purple",
    },
  },
  textColor: {
    current: "currentColor",
    transparent: "transparent",
    "neutral-text": {
      high: "purple",
      medium: "purple",
      inverse: "purple",
      "light-onbackground": "purple",
      "dark-onbackground": "purple",
      "interactive-disabled": "purple",
    },
    "primary-text": {
      high: "purple",
      "interactive-default": "purple",
      "interactive-hover": "purple",
      "interactive-active": "purple",
    },
    "accent1-text": {
      high: "purple",
    },
    "accent3-text": {
      high: "purple",
    },
    "accent2-text": {
      high: "purple",
    },
  },
  borderColor: {
    current: "currentColor",
    transparent: "transparent",
    "neutral-border": {
      high: "purple",
      medium: "purple",
      low: "purple",
      "interactive-disabled": "purple",
    },
    "primary-border": {
      high: "purple",
      "interactive-default": "purple",
      "interactive-hover": "purple",
      "interactive-active": "purple",
    },
    "promo-border": {
      high: "purple",
    },
    "select-border": {
      high: "purple",
    },
    "accent1-border": {
      high: "purple",
    },
    "accent3-border": {
      high: "purple",
    },
    "accent2-border": {
      high: "purple",
    },
  },
};
