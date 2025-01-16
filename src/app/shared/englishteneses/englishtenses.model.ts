import { EnglishTenesesItem } from "./englishtenses-item.model";
import { TensesDropDown } from "../dropdown-tenses/tenses-dropdown.model";
import { DropDownItem } from "../dropdown-tenses/dropdown-item.model";
import { SentenceTypeDropDown } from "../dropdown-tenses/sentence-type-dropdown.model";

export class EnglishTenesesModel {
  public search: string;
  public englishTenesesItems: EnglishTenesesItem[] = [];
  public tensesDropDown: TensesDropDown = new TensesDropDown();
  public sentenceTypeDropDown: SentenceTypeDropDown = new SentenceTypeDropDown();
}
