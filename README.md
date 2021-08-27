<h1 align="center">@mish-tv/stackdriver-logger</h1>

<div align="center">
<a href="https://www.npmjs.com/package/@mish-tv/stackdriver-logger"><img src="https://img.shields.io/npm/v/@mish-tv/stackdriver-logger.svg" alt="npm"></a>
<a href="https://github.com/mish-tv/stackdriver-logger/actions/workflows/build-and-test.yml"><img src="https://github.com/mish-tv/stackdriver-logger/actions/workflows/build-and-test.yml/badge.svg" alt="Build and test"></a>
<a href="https://codecov.io/gh/mish-tv/stackdriver-logger"><img src="https://img.shields.io/codecov/c/github/mish-tv/stackdriver-logger.svg" alt="coverage"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/mish-tv/stackdriver-logger.svg?style=flat" alt="license"></a>
</div>

<h4 align="center">
`@mish-tv/stackdriver-logger` a package to output logs to stackdriver logging through standard output.
I assume it will be used in applications running on CloudRun. 
</h4>


## Installation
```
npm install --save @mish-tv/stackdriver-logger
```

## Usage
```typescript
import { logger } from "@mish-tv/stackdriver-logger";

logger.debug("log message", payload);
logger.info("log message", payload);
logger.warning("log message", payload);
logger.error("log message", payload);
```

## Todo
- Make sure we know the file name and line number of the code that was logged.
