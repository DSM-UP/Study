## linux 파일 관리 명령어

### mkdir

![mkdir](https://user-images.githubusercontent.com/51042546/86507593-60bf6200-be14-11ea-83ac-14a72acbec4a.JPG)

`mkdir [options...] [directories ...]`

디렉터리를 생성하는 명령어이다.

모두 생략하고 디렉터리명만 지정하면 현재 디렉터리에 해당 이름으로 디렉터리를 생성한다.

### touch

![touch](https://user-images.githubusercontent.com/51042546/86507651-e216f480-be14-11ea-800b-92a9be975440.JPG)

`touch file_name`

빈 파일을 현재 디렉터리에 생성합니다. 이때 확장자를 지정할 수 있습니다.
(하지만 리눅스에서는 확장자가 의미가 없죠.)

### cp

![cp](https://user-images.githubusercontent.com/51042546/86508333-3a9cc080-be1a-11ea-86ff-3283de845eac.JPG)

`cp src_file dest_file`

`src_file`파일을 현재 디렉터리에 `dest_file`이라는 이름으로 복사한다.

복수 개의 파일을 한 번에 복사하고 싶다면 `dest_file`을 공백으로 구분하여 여러 번 주면 된다.

### mv

![mv](https://user-images.githubusercontent.com/51042546/86507702-4f2a8a00-be15-11ea-94d5-52fa888935ff.JPG)

`mv [option] source destination`

기본적으로 `source`를 `destination` 경로로 이동시키는 명령어입니다.

![mv_2](https://user-images.githubusercontent.com/51042546/86507788-1212c780-be16-11ea-87a2-bc63bf673eda.JPG)

`destination`에 경로가 아닌 파일명을 입력할 경우 `source`를 `destination`에 입력한 이름으로 파일명을 변경합니다.

### rm

![rm](https://user-images.githubusercontent.com/51042546/86507874-703faa80-be16-11ea-9883-6d8f14b5e77e.JPG)

`rm [option] ... FILE ...`

`FILE`에 지정한 파일을 삭제합니다.

![cannot remove directory](https://user-images.githubusercontent.com/51042546/86507911-b432af80-be16-11ea-8b44-bb5a7aedf5ec.JPG)

`rm`은 어디까지나 파일만 삭제할 수 있다. 디렉터리는 삭제가 불가능하다.

![can remove directory](https://user-images.githubusercontent.com/51042546/86507950-08d62a80-be17-11ea-9de9-c9e021509deb.JPG)

단, `rm`에 `r` 옵션을 주게 되면 디렉터리도 지울 수 있으며 디렉터리 내 모든 파일도 지워진다.

![are you sure to remove](https://user-images.githubusercontent.com/51042546/86508013-7c783780-be17-11ea-8e92-81bc27f933be.JPG)

대신, `r` 옵션을 주게 되면 디렉터리 내 모든 파일도 지워지기 때문에 자칫하면 지우면 안 되는 디렉터리 및 파일을 모두 날려버릴 수도 있다.

그래서 `i` 옵션을 주게 되면 디렉터리 내 모든 파일과 디렉터리 삭제 전 삭제 여부를 사용자에게 물어본다.

여기서 y라고 입력하면 삭제하고 n이라고 입력하면 삭제하지 않는다.

### rmdir

`rmdir [path]`

디렉터리를 삭제하는 명령어지만 디렉터리가 비어있지 않으면 삭제할 수 없어 잘 쓰이지 않는다.