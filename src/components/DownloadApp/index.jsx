import Image from "next/image";
import Link from "next/link";

export default function DownloadApp({
                                      id = "modal-default",
                                      className = ""
                                    }) {
  return (
    <dialog id={id} className={`modal ${className}`}>
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <div className="bg-white rounded lg:rounded-2xl p-2 lg:p-3 flex flex-col items-center">
          <div>
            <Image src={"/assets/images/qrcode_gg_play.png"} alt={"qr download app"} width={300} height={300}/>
          </div>
          <div className="flex space-x-5 items-center">
            <div>
              <Link
                href="https://play.google.com/store/apps/details?id=xemay.oto.batdongsan.dienthoai.muabannhanh.chotot.raovat.chomuaban.muaban"
                passHref>
                <a target={'_blank'}>
                  <Image
                    width="188"
                    height="56"
                    src={`/assets/images/play-store.png?v=2`}
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://apps.apple.com/app/id1566860234" passHref>
                <a target={'_blank'}>
                  <Image
                    width="175"
                    height="58"
                    src={`/assets/images/apple-store.png?v=4`}
                    alt=""
                  />
                </a>
              </Link>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </form>
    </dialog>
  )
}