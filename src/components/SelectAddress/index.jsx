import Image from "next/image";
import Link from "next/link";
import {CATEGORIES} from "../../utils/constant";
import InputCom from "../Helpers/InputCom";

export default function SelectAddress({
                                      id = "modal-select-address-default",
                                      className = ""
                                    }) {
  return (
    <dialog id={id} className={`modal ${className}`}>
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg mb-4">Địa chỉ</h3>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
        <div className="bg-white flex flex-col items-center space-y-2">
          <select
              defaultValue={-1}
              className="w-full flex items-center select select-bordered text-xs"
              style={{outline: 'none'}}>
            <option selected value={-1}>
              Tỉnh, thành phố
            </option>
            {CATEGORIES.map(e => (
                <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>
          <select
              className="w-full flex items-center select select-bordered text-xs"
              style={{outline: 'none'}}>
            <option selected value={-1}>
              Quận, huyện, thị xã
            </option>
            {CATEGORIES.map(e => (
                <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>
          <select
              className="w-full flex items-center select select-bordered text-xs"
              style={{outline: 'none'}}>
            <option selected value={-1}>
              Phường, xã, thị trấn
            </option>
            {CATEGORIES.map(e => (
                <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>
          <InputCom
              placeholder="Số 1 ngõ A"
              label="Địa chỉ cụ thể"
              name="address"
              type="text"
              inputClasses="py-3"
          />
        </div>
      </form>
    </dialog>
  )
}