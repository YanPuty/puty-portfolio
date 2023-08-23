import 'dotenv/config';

import * as cli from 'next/dist/cli/next-start';

cli.nextStart(['-p', process.env.PORT || '4000']);
