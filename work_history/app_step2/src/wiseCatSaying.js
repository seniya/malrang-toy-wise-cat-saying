const wiseword = [
  {
    key: 1,
    contents: '운은 마음의 준비가 있는 사람에게만 미소를 짓는다.',
    name: '파스퇴르'    
  },
  {
    key: 2,
    contents: '사랑은 신뢰의 행위다, 믿으니까 믿는 것이다, 사랑하니까 사랑하는 것이다',
    name: '로망롤랑'    
  },
  {
    key: 3,
    contents: '위대함에는 신비성이 필요하다, 너무 알면 사람들은 존경하지 않는다',
    name: '드골',
  },
  {
    key: 4,
    contents: '요구받기 전에 먼저 충고하지 말라',
    name: '에라스무스',
  },
  {
    key: 5,
    contents: '우주를 한 사람으로 축소시키고 그 사람을 신으로 확대시키는 것이 바로 사랑이다',
    name: '빅토르 위고',
  },
  {
    key: 6,
    contents: '친절한 말은 봄볕과 같이 따사롭다',
    name: '러시아 속담'
  },
  {
    key: 7,
    contents: '좀 모자라는 사람은 말이 적은 바보일지 모르지만 말 많은 바보보다는 낫다',
    name: '라 브뤼에르'
  },
  {
    key: 8,
    contents: '처음 시작은 가장 용기 있는 자 만이 할 수 있다',
    name: '노르웨이 속담'
  },
  {
    key: 9,
    contents: '계단을 밟아야 계단 위에 올라설수 있다',
    name: '터키속담'
  },
  {
    key: 10,
    contents: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다',
    name: '앙드레 말로'
  },
  {
    key: 11,
    contents: '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다',
    name: '단테'
  },
  {
    key: 12,
    contents: '독서가 정신에 미치는 영향은 운동이 육체에 미치는 영향과 같다',
    name: '에디슨'
  },
  {
    key: 13,
    contents: '인간은 자기가 생각하고 있는 것과 같은 인간이 된다',
    name: '힌두교 경전'
  },
  {
    key: 14,
    contents: '무소유란 아무것도 갖지 않는 건이 아니라 불필요한 것을 갖지 않는다는 뜻이다',
    name: '법정 스님'
  },
  {
    key: 15,
    contents: '가장 오래 산 사람은 나이가 많은 사람이 아니고 많은 경험을 한 사람이다',
    name: '루소'
  },
  {
    key: 16,
    contents: '사랑은 달콤하다,그러나 빵이 수반할 경우에만 그렇다',
    name: '유태인 격언'
  },
  {
    key: 17,
    contents: '사랑받는 것이 행복이 아리라 사랑하는 것이 행복이다',
    name: '헤르만 헤세'
  },
  {
    key: 18,
    contents: '몸가짐은 각자의 자기의 모습을 비치는 거울이다',
    name: '괴테'
  },
  {
    key: 19,
    contents: '가장 곤란한 것은 모든 사람이 생각하지 않고 나오는 대로 말하는 것이다',
    name: '알랭'
  },
  {
    key: 20,
    contents: '남의 앞에 나서는 것을 두려워하지 말라',
    name: '엘마 윌러'
  },
  {
    key: 21,
    contents: '생활은 습관이 짜낸 천에 불과하다',
    name: '아미엘'
  },
  {
    key: 22,
    contents: '행복은 습관이다,그것을 몸에 지니라',
    name: '허버드'
  },
  {
    key: 23,
    contents: '남의 생활과 비교하지 말고 네 자신의 생활을 즐겨라',
    name: '콩도르세'
  },
  {
    key: 24,
    contents: '의욕적인 목표가 인생을 즐겁게 한다',
    name: '로버트 슐러'
  },
  {
    key: 25,
    contents: '부모의 좋은 습관보다 더 좋은 어린이 교육은 없다',
    name: '슈와프'
  },
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomWord = wiseword[getRandomInt(0,24)]

document.querySelector('#wcs-container').insertAdjacentHTML(
  'afterbegin',
  `
  <div class="wcs-card">
    <div class="wcs-card__image">
      <img 
        src="https://thecatapi.com/api/images/get?format=src&type=gif" 
        style="display: block;">
    </div>          
    <div id="wise_name" class="wcs-card__name">${randomWord.name}</div>
    <div id="wise_contents" class="wcs-card__contents">${randomWord.contents}</div>
  </div>
  `
);

