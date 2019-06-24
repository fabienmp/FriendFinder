var path = require("path");

module.exports = function (app, models) {
    var friendsContext = models.friend;

    app.get("/api/friends", function (req, res) {

        friendsContext.findAll().then(slackMessages => {
            res.status(200).send(slackMessages);
        });
    });

    app.post("/api/friend", function (req, res) {

        const friendName = req.body.friendName;
        const photoLink = req.body.photoLink;
        const q1 = req.body.q1;
        const q2 = req.body.q2;
        const q3 = req.body.q3;
        const q4 = req.body.q4;
        const q5 = req.body.q5;
        const q6 = req.body.q6;
        const q7 = req.body.q7;
        const q8 = req.body.q8;
        const q9 = req.body.q9;
        const q10 = req.body.q10;

        friendsContext.create({
                "name": friendName,
                "imageLink": photoLink,
                "scores": JSON.stringify([
                    q1,
                    q2,
                    q3,
                    q4,
                    q5,
                    q6,
                    q7,
                    q8,
                    q9,
                    q10
                ])
            })
            .then((newFriend) => {
                // The get() function allows you to recover only the DataValues of the object
                var newFriend = newFriend.get();

                var allFriends = friendsContext.findAll();
                var newFriendValues = JSON.parse(newFriend.scores);
                var currentDiffValue = Number.MAX_SAFE_INTEGER;
                var currentMatchingFriend = null;

                allFriends.then(friends => {
                    friends.filter(f => f.id != newFriend.id).forEach(function (friend) {

                        var friendScores = JSON.parse(friend.scores);
                        var q1Diff = Math.abs(friendScores[0] - newFriendValues[0]);
                        var q2Diff = Math.abs(friendScores[1] - newFriendValues[1]);
                        var q3Diff = Math.abs(friendScores[2] - newFriendValues[2]);
                        var q4Diff = Math.abs(friendScores[3] - newFriendValues[3]);
                        var q5Diff = Math.abs(friendScores[4] - newFriendValues[4]);
                        var q6Diff = Math.abs(friendScores[5] - newFriendValues[5]);
                        var q7Diff = Math.abs(friendScores[6] - newFriendValues[6]);
                        var q8Diff = Math.abs(friendScores[7] - newFriendValues[7]);
                        var q9Diff = Math.abs(friendScores[8] - newFriendValues[8]);
                        var q10Diff = Math.abs(friendScores[9] - newFriendValues[9]);

                        var totalDiff = q1Diff + q2Diff + q3Diff + q4Diff + q5Diff + q6Diff + q7Diff + q8Diff + q9Diff;

                        if (totalDiff < currentDiffValue) {
                            currentDiffValue = totalDiff;
                            currentMatchingFriend = friend;
                        }
                        
                    });

                    console.log(newFriend);
                    console.log(currentMatchingFriend);
                    res.status(201).send(currentMatchingFriend);
                });

            })
            .catch((err) => {
                console.log("Error while creating friend: ", err)
            });

    });
}