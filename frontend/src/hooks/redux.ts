import { type TypedUseSelectorHook, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector