import 'dotenv/config';

import * as cli from 'next/dist/cli/next-dev';

cli.nextDev(['-p', process.env.PORT || '4000']);
