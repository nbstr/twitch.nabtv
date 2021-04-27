/**
 * SubscribersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const CLIENT_ID = "lq0mkp3q6q1x7w6rq9tx2slvsduij4";
const REDIRECT_URI = "http://localhost:1337";
const SCOPES = ["channel_subscriptions"];

let request = require("request");

module.exports = {
  login: async (req, res) => {
    request.get(
      {
        url: `https://api.twitch.tv/kraken/users/nabtv?client_id=${CLIENT_ID}`,
        headers: {
          Accept: "application/vnd.twitchtv.v5+json",
          "Client-ID": CLIENT_ID
        }
      },
      (error, response, body) => {
        if (error) {
          sails.log.error(error);
          return res.send(error);
        } else {
          sails.log.info(response);
          sails.log.info(body);
          return res.send(body);
        }
      }
    );
  },
  getSubs: async function(req, res) {
    getToken = () => {
      request.get(
        {
          url:
            "https://api.twitch.tv/kraken/channels/<channel ID>/subscriptions",
          headers: {
            Accept: "application/vnd.twitchtv.v5+json",
            "Client-ID": CLIENT_ID,
            Authorization: "OAuth cfabdegwdoklmawdzdo98xt2fo512y"
          }
        },
        (error, response, body) => {
          if (error) {
            sails.log.error(error);
            return res.send(error);
          } else {
            sails.log.info(response);
            sails.log.info(body);
            return res.send(body);
          }
        }
      );
    };
    getSubs = () => {
      request.get(
        {
          url:
            "https://api.twitch.tv/kraken/channels/<channel ID>/subscriptions",
          headers: {
            Accept: "application/vnd.twitchtv.v5+json",
            "Client-ID": "lq0mkp3q6q1x7w6rq9tx2slvsduij4",
            Authorization: "OAuth cfabdegwdoklmawdzdo98xt2fo512y"
          }
        },
        (error, response, body) => {
          if (error) {
            sails.log.error(error);
            return res.send(error);
          } else {
            sails.log.info(response);
            sails.log.info(body);
            return res.send(body);
          }
        }
      );
    };
  }
};
