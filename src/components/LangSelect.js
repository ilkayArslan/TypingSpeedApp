import { changeLang } from "../redux/wordSlicer"
import { useDispatch, useSelector } from "react-redux";


function LangSelect() {
    const dispatch = useDispatch();
    const timer = useSelector(state => state.words.timer)
    return (
        <div className='mt-5 m-auto text-end langArea'>
            <select defaultValue="turkish" className="w-25 bg-success fw-bolder text-light rounded" onChange={(e) => dispatch(changeLang(e.target.value))} disabled={timer < 60} >
                <option value="turkish">Türkçe</option>
                <option value="english">English</option>
            </select>
        </div>
    )
}

export default LangSelect