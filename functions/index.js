// Copyright 2017 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const functions = require('firebase-functions');

exports.hourly_job = functions.pubsub
  .topic('hourly-tick')
  .onPublish((message) => {
    console.log("This job is run every hour!");
    if (message.data) {
      const dataString = Buffer.from(message.data, 'base64').toString();
      console.log(`Message Data: ${dataString}`);
    }

    return true;
  });

  exports.minute_job = functions.pubsub
    .topic('minute-tick')
    .onPublish((message) => {
      if (message.data) {
        const dataString = Buffer.from(message.data, 'base64').toString();
        console.log(`Message Data: ${dataString}`);
      }

      // console.log(`Successfully ran function`)

      return true;
    });
