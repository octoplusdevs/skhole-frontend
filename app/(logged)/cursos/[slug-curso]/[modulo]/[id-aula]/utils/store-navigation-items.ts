import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage";
import { IPendingNavigation } from "../interface";

const storeNavigationItems = ({
  lessonId,
  path,
  lessonOrder,
  moduleOrder,
  moduleId,
}: IPendingNavigation) => {
  const storageItems = [
    { key: "currentLesson", value: lessonId },
    { key: "currentPage", value: path },
    { key: "lessonOrder", value: lessonOrder },
    { key: "moduleOrder", value: moduleOrder },
    { key: "currentModuleId", value: moduleId },
  ];
  storageItems.map(({ key, value }) => {
    setItemLocalStorage(key, value);
  });
};

export { storeNavigationItems };
