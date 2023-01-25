export const validateEmail = (mail: string) => {
  let returnObj = {
    value: false,
    message: 'Email tidak valid',
  };
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    returnObj = {
      value: true,
      message: '',
    };
    return returnObj;
  }

  return returnObj;
};

export const validateName = (str: string) => {
  const reLetter = /[a-zA-Z]/;
  const reSpace = /\s/g;
  const reSpecialChar = /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]/\\]/gi;
  const tempName = str;

  let returnObj = {
    value: true,
    message: '',
  };

  if (tempName.trim() === '') {
    returnObj = {
      value: false,
      message: 'Nama tidak boleh kosong',
    };
    return returnObj;
  }
  if (tempName.trim().length < 3) {
    returnObj = {
      value: false,
      message: 'Nama harus lebih dari 3 karakter',
    };
    return returnObj;
  }

  for (let i = 0; i < tempName.length; i++) {
    if (!tempName[i].match(reLetter) && !tempName[i].match(reSpace) && !tempName[i].match(reSpecialChar)) {
      returnObj = {
        value: false,
        message: 'Nama tidak boleh memiliki angka ataupun simbol',
      };
      return returnObj;
    }
  }
  return returnObj;
};

export const validatePassword = (password: string, password2: string) => {
  let returnObj = {
    value: true,
    message: '',
  };

  if (!password || !password2 || password !== password2 || password.length <= 7) {
    returnObj = {
      value: false,
      message: 'Password tidak memenuhi aturan',
    };
    return returnObj;
  }

  return returnObj;
};
