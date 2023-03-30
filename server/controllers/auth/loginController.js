const loginController = (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res
    .status(400)
    .send({
      status: 'fail',
      message: `Invalid username or password!`
    })
  }

  res
  .status(200)
  .send({
    status: 'success',
    message: `Welcome ${username}`
  })
}

export default loginController
