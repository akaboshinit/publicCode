import { Image_card } from '../components/index';

const IndexPage = () => {
  return (
    <main className="main_container grid place-items-center my-5">
      <section className="bg_whiteblue w-11/12 md:w-4/5 mt-5 p-3 rounded text-center flex grid place-items-center">
        <img src="./icon.jpg" width="150px" height="150px" className="w-52 h-52 object-cover rounded-full" />
        <div className="mt-3">
          <h2 className="text-7xl">
            <span>あか</span>
            <span>ぼし</span>
          </h2>
          <h3 className="text-4xl">
            (akaboshinit)
          </h3>
        </div>
        <div className="w-36 mt-3 flex justify-between">
          <a  href="https://github.com/akaboshinit" target="_blank">
          <img width="50px" height="50px" alt="github" src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" />
          </a>
          <a  href="https://twitter.com/akaboshinit" target="_blank">
          <img width="50px" height="50px" alt="twitter" src="https://www.flaticon.com/svg/static/icons/svg/733/733635.svg" />
          </a>
        </div>
        <div className="border border-black border-solid rounded mt-3 p-3">
          <p>
            個人でサービスを作ったりしている大学生です。先生、インターンがしたいです、、、、、
          </p>
        </div>
      </section>
      <section className="bg_whiteblue w-11/12 md:w-4/5 rounded mt-6 py-4 px-5 md:px-20">
        <h3 className="text-3xl py-2">やってきた事</h3>
        <div className="flex flex-wrap justify-center items-center">
          <Image_card
            src="http://placehold.jp/FFFFFF/57B640/250x250.png?text=T-LOG"
            alt="image"
            title="T-LOG"
            description="大学の授業内容、講師への評価を生徒目線で匿名投稿できるサイト"
          />
          <Image_card
            src="http://placehold.jp/FFFFFF/57B640/250x250.png?text=大学通知linebot"
            alt="image"
            title="大学通知linebot"
            description="大学ポータルサイトに配信される通知をLINEで配信してくれるbot"
          />
          <Image_card
            src="http://placehold.jp/FFFFFF/57B640/250x250.png?text=ホームスマートリモコン"
            alt="image"
            title="ホームスマートリモコン"
            description="ラズパイを使って家の赤外線機器を統一化"
          />
        </div>
      </section>
      <section className="bg_whiteblue w-11/12 md:w-4/5 rounded mt-6 py-4 px-5 md:px-20">
        <h3 className="text-3xl py-2">スキル</h3>
        <h4 className="text-xl py-1">プログラミング言語・フレームワーク</h4>
        <table className="bg-transparent w-full">
          <tbody>
            <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">完全に理解した</td>
              <td className="p-3">null</td></tr>
            <tr className="bg-gray-300">
              <td className="p-3">理解した</td>
              <td className="p-3">javascript, next, node</td></tr>
            <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">最低限理解した</td>
              <td className="p-3">golang, typescript</td></tr>
            <tr className="bg-gray-300">
              <td className="p-3">理解した?</td>
              <td className="p-3">python</td></tr>
          </tbody>
        </table>
        <h4 className="text-xl py-1">サービス</h4>
        <table className="bg-transparent w-full">
          <tbody>
            <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">完全に理解した</td>
              <td className="p-3">null</td></tr>
            <tr className="bg-gray-300">
              <td className="p-3">理解した</td>
              <td className="p-3">firebase, materialui, tailwind, vercel, netlify, Github pages</td></tr>
            <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">最低限理解した</td>
              <td className="p-3">raspberrypi, arduino, esp8266, chrome拡張機能, LINEapi, linux</td></tr>
            <tr className="bg-gray-300">
              <td className="p-3">理解した?</td>
              <td className="p-3"></td></tr>
          </tbody>
        </table>
      </section>
      <section className="bg_whiteblue w-11/12 md:w-4/5 rounded mt-6 py-4 px-5 md:px-20">
        <h3 className="text-3xl py-2">プロフィール</h3>
        <table className="bg-transparent w-full">
          <tbody>
            <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">名前</td>
              <td className="p-3">あかぼし</td></tr>
            <tr className="bg-gray-300">
              <td className="p-3">Twitter</td>
              <td className="p-3"><a href="https://twitter.com/akaboshinit" target="_blank">@akaboshinit</a></td></tr>
            <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">所属</td>
              <td className="p-3">とある大学の1年生(24卒)</td></tr>
            <tr className="bg-gray-300">
              <td className="p-3">すみか</td>
              <td className="p-3">東京</td></tr>
            <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">趣味</td>
              <td className="p-3">webサービス開発, おうちハック, Twitter, 映画, 音楽, ベース</td></tr>
            <tr className="bg-gray-300">
              <td className="p-3">好きな映画</td>
              <td className="p-3">インターステラー, きっと、うまくいく, フォーカス, 告白, ファイト・クラブ ...etc</td></tr>
            {/* <tr className="bg-gray-300 bg-opacity-30">
              <td className="p-3">すきなキャクター</td>
              <td className="p-3">澤村・スペンサー・英梨々, 一色いろは, 矢野エリカ, 柊かがみ, 鹿賀りん, 友利奈緒</td></tr> */}
          </tbody>
        </table>
      </section>
      {/* <section className="bg_whiteblue w-4/5 rounded mt-5 p-3">
        <div style={{"height":"400px"}}></div>
      </section> */}
    </main>
  )
}

export default IndexPage;