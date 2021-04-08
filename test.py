log_id = input("아이디:")
log_pwd = input("비밀번호:")
print(log_id,log_pwd)

if log_id == 'yl0937':
    if log_pwd == "001231":
        print("로그인 성공")
else:
    print("로그인오류")