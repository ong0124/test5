import { e as dayjs } from './server.mjs';

const formatDate = (date) => {
  return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};

export { formatDate as f };
//# sourceMappingURL=formatDate-sHBEhsiw.mjs.map
