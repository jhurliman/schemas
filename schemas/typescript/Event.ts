// Generated by https://github.com/foxglove/schemas

import { Duration } from "./Duration";
import { EventKeyValue } from "./EventKeyValue";
import { Time } from "./Time";

/** a message used to annotate some event of interest in the data */
export type Event = {
  /** time when the event occurred */
  timestamp: Time;

  /** duration of event, starting at `timestamp` */
  duration: Duration;

  /** array of key-value metadata for this event */
  metadata: EventKeyValue[];
};
