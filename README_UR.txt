WorkTrust — حقیقی ایپ کے سورس کوڈ کا ابتدائی ورژن

یہ پرانے HTML ڈیمو سے آگے کا قابلِ توسیع React/PWA سورس ہے۔ یہ Supabase Auth اور PostgreSQL database سے جڑ سکتا ہے۔ مگر ابھی اسے عوام کے لیے مکمل تیار یا 100% production-ready نہ سمجھیں۔

ضروری سیٹ اپ:
1) کمپیوٹر پر Node.js LTS انسٹال کریں۔
2) Supabase پر نیا project بنائیں۔
3) Supabase SQL Editor میں supabase/schema.sql چلائیں۔
4) .env.example کو .env.local کا نام دیں اور Supabase Project URL اور anon/public key درج کریں۔
5) اس فولڈر میں terminal کھول کر `npm install`، پھر `npm run dev` چلائیں۔
6) `npm run build` سے build ٹیسٹ کریں۔

اہم:
- اس وقت کمپنی onboarding، admin verification dashboard، server-side moderation، chat، document upload، visa tracking، email alerts، fraud workflow، audit logs اور load/security testing مکمل نہیں۔
- خودکار سرکاری تصدیق موجود نہیں؛ کسی جاب کو Verified نہ کہیں جب تک قانونی طور پر مجاز انسانی/سرکاری تصدیقی عمل نافذ نہ ہو۔
- پاسپورٹ، اقامہ یا حساس دستاویزات ابھی اپ لوڈ نہ کروائیں۔
- browser میں صرف Supabase anon/public key رکھیں؛ service_role key کبھی نہیں۔
- حقیقی صارفین سے پہلے قانونی جائزہ، privacy policy، security audit، backup اور production hosting لازمی ہیں۔
