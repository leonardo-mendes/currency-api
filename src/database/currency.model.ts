import { model, Schema, Model, Document, Date } from 'mongoose';

interface ICurrency extends Document {
  name: string;
  value: number;
  specificDate: Date;
}

const CurrencySchema: Schema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  specificDate: { type: Date, required: true },
}, { timestamps: true });

const Currency: Model<ICurrency> = model('Currency', CurrencySchema);


export { ICurrency, Currency}