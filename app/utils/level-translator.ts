const levelTranslator = (level: string) => {
  const LEVELS: any = {
    ADVANCED: "Avançado",
    INTERMEDIATE: "Intermediário",
    BEGINNER: "Iniciante",
  };

  return LEVELS[level];
};

export {levelTranslator}
