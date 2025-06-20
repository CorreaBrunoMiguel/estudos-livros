const getErrorMessage = (err) => {
  let message = ''
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueMessage(err)
        break
      default:
        message: 'Something went wrong'
    }
  } else {
    for (let errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message
    }
  }
  return message
}

const getUniqueMessage = (err) => {
  let output
  try {
    let fieldName = err.message.substring(
      err.message.lastIndexOf('.$') + 2,
      err.message.lastIndexOf('_1')
    )
    output =
      fieldName.charAt(0).toUppercase() + fieldName.slice(1) + ' already exists'
  } catch (error) {
    output = 'Unique field already exists'
  }
  return output
}

export default { getErrorMessage }
