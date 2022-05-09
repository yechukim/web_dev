## Picture Element

> 이전 챕터에서 `srcset` 속성을 사용해서 똑같은 이미지를 다양한 크기로 제공할 수 있었다(브라우저가 알맞는 버전을 골라서 사용함)\
> 이미지를 완전히 바꾸고 싶다면 `picture` element를 사용하면 된다.

`srcset`가 `src`랑 세트라면, `picture`는 `img`랑 같이 써야한다.

```html
<picture>
	<img src="image.jpg" alt="A description of the image." />
</picture>
```

img element가 안에 없다면 picture element가 제대로 먹지 않는다.\
srcset 속성이 브라우저에 제안하는거라면 picture 요소는 명령을 내리는 것임 (control을 갖게됨 )

### source

> picture element 안에 여러가지 `source` element를 가질 수 있다. 하나의 source가 하나의 srset attribute을 가질 수 잇음

### image formats

```html
<picture>
	<source srcset="image.avif" type="image/avif" />
	<source srcset="image.webp" type="image/webp" />
	<img
		src="image.jpg"
		alt="A description of the image."
		width="300"
		height="200"
		loading="lazy"
		decoding="async"
	/>
</picture>
```

> 브라우저가 AVIF 이미지를 렌더링 할 수 있다면, 첫번째 소스인 AVIF를 선택하고 안되면 다음 소스로 넘아간다. 두번째 소스도 넘어가면 img element로 넘어감

`type` attribute로 브라우저에게 구체화된 포맷을 알려줌

### image size

> 이미지 포맷 바꾸기와 마찬가지로, `media` attribute를 써서 이미지 크기 또한 브라우저에게 알려줄 수 있음\
> media attribute 안에 미디어 쿼리를 사용하자

img element의 scrset, size attributes는 브라우저에게 제안하는 것이고, source는 제안이라기 보다는 명령(command)이라는 점에서 다르다.

```html
<picture>
	<source srcset="large.png" media="(min-width: 75em)" />
	<source srcset="medium.png 1x, large.png 2x" media="(min-width: 40em)" />
	<img
		src="small.png"
		alt="A description of the image."
		width="300"
		height="200"
		loading="lazy"
		decoding="async"
	/>
</picture>
```

### cropping

> 똑같은 이미지의 크기만 다르게 한다면 `srcset`이 가장 좋은 옵션이다.\
> 이미지가 작은 사이즈일 때 별로라면 크롭 이미지를 만들 수 있다. 각 소스에 width, height를 지정해서 크롭해준다.

```html
<picture>
	<source
		srcset="full.jpg"
		media="(min-width: 75em)"
		width="1200"
		height="500"
	/>
	<source
		srcset="regular.jpg"
		media="(min-width: 50em)"
		width="800"
		height="400"
	/>
	<img
		src="cropped.jpg"
		alt="A description of the image."
		width="400"
		height="400"
		loading="eager"
		decoding="sync"
	/>
</picture>
```

✏️ responsive image 는 보통 img element인 srcset, size attribute으로 커버할 수 있지만, picture도 필요할 경우를 대비해 알아두자
