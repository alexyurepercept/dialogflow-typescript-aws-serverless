import { handler } from "../index";

describe("Intent Processor", () => {
  beforeAll(() => {});

  beforeEach(() => {});

  test("should be able to close position", done => {
    handler(
      {
        body: JSON.stringify({
          responseId: "e58e7bde-3386-40f3-9ef3-4a6ff7e7739e",
          queryResult: {
            queryText: "what can you do",
            parameters: {},
            allRequiredParamsPresent: true,
            fulfillmentMessages: [
              {
                text: {
                  text: [""]
                }
              }
            ],
            intent: {
              name:
                "projects/repercepttypescriptjestboot-kp/agent/intents/ac7476f5-2497-4665-9913-f964b0b9f0f8",
              displayName: "ListProducts"
            },
            intentDetectionConfidence: 1,
            languageCode: "en"
          },
          originalDetectIntentRequest: {
            payload: {}
          },
          session:
            "projects/repercepttypescriptjestboot-kp/agent/sessions/3cc8f9b1-22c4-55ff-5513-d4247880d5d5"
        })
      },
      null,
      function(err: any, result: any) {
        expect(err).toBeFalsy();
        expect(result).toEqual({
          statusCode: 200,
          body: JSON.stringify({
            fulfillmentText:
              "I can do bug fixes for you, usually priced at 50 US dollar per day",
            outputContexts: []
          })
        });
        done();
      }
    );
  });

  afterEach(done => {
    done();
  });

  afterAll(done => {
    done();
  });
});
