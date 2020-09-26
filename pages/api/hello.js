const handler = (req, res) => {
  // Get request for stats
  console.log('access');
  // await Stat.find({}, function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     res.json('');
  // })
  return res.send('hello world');
};
export default handler;