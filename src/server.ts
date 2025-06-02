import { createApp } from './app';
import { PORT, NODE_ENV } from './config/env';

const app = createApp();

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});