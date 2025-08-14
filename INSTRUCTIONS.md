# Projeyi Lokal Olarak Çalıştırma ve Test Etme Adımları

Bu doküman, portfolyo projesinin backend (Django) ve frontend (Vanilla JS) kısımlarını lokal makinenizde nasıl çalıştıracağınızı adım adım açıklamaktadır.

## Gereksinimler
- Python 3.8+
- `pip` (Python paket yöneticisi)
- `venv` (Python sanal ortam aracı)

## Kurulum ve Çalıştırma

### 1. Backend Kurulumu

**Adım 1: Proje Dizisine Gidin**
Terminalinizi açın ve projenin `backend` klasörünün içine gidin.
```bash
cd backend
```

**Adım 2: Sanal Ortam (Virtual Environment) Oluşturun ve Aktif Edin**
Python için bir sanal ortam oluşturmak, proje bağımlılıklarını sisteminizden izole bir şekilde yönetmenizi sağlar.
```bash
# Sanal ortamı oluşturun
python -m venv venv

# Windows kullanıyorsanız bu komutla aktif edin
venv\\Scripts\\activate

# macOS veya Linux kullanıyorsanız bu komutla aktif edin
source venv/bin/activate
```

**Adım 3: Bağımlılıkları Yükleyin**
Proje için gerekli olan tüm Python paketlerini yükleyin.
```bash
pip install -r requirements.txt
```

**Adım 4: Ortam Değişkenlerini Ayarlayın (`.env` dosyası)**
`backend` klasörü içinde `.env` adında yeni bir dosya oluşturun ve aşağıdaki içeriği bu dosyaya yapıştırın.
```
# Yeni bir Django secret key oluşturun. Örneğin https://djecrety.ir/ adresinden alabilirsiniz.
SECRET_KEY='your-strong-secret-key'

# Lokal geliştirme için True olarak ayarlayın
DEBUG=True

# Lokal veritabanı için varsayılan ayar
DATABASE_URL='sqlite:///db.sqlite3'

# Cloudinary bilgileriniz. Kendi Cloudinary hesabınızdan almanız gerekmektedir.
# Örnek: cloudinary://API_KEY:API_SECRET@CLOUD_NAME
CLOUDINARY_URL='cloudinary://<api_key>:<api_secret>@<cloud_name>'
```
**Önemli Not:** `CLOUDINARY_URL` değeri için kendi Cloudinary API anahtarınızı, gizli anahtarınızı ve bulut adınızı girmelisiniz. Eğer Cloudinary hesabınız yoksa, ücretsiz bir tane oluşturabilirsiniz. Bu, resim ve dosya yüklemeleri için gereklidir.

**Adım 5: Veritabanı Migrasyonlarını Uygulayın**
Veritabanı tablolarını oluşturmak için bu komutu çalıştırın.
```bash
python manage.py migrate
```

**Adım 6: Yönetici (Superuser) Oluşturun**
Django admin paneline (`http://127.0.0.1:8000/admin/`) erişmek için bir yönetici hesabı oluşturun. Komutu çalıştırdıktan sonra sizden istenen kullanıcı adı, e-posta ve şifre bilgilerini girin.
```bash
python manage.py createsuperuser
```

**Adım 7: Örnek Verileri Yükleyin (Database Seeding)**
Portfolio sitesinin boş görünmemesi için örnek verileri veritabanına yükleyin.
```bash
python manage.py seed
```

**Adım 8: Geliştirme Sunucusunu Başlatın**
Artık her şey hazır! Aşağıdaki komutla sunucuyu başlatabilirsiniz.
```bash
python manage.py runserver
```
Sunucu varsayılan olarak `http://127.0.0.1:8000/` adresinde çalışmaya başlayacaktır.

### 2. Frontend'i Görüntüleme

Backend sunucusu çalışırken, bir web tarayıcısı açın ve `http://127.0.0.1:8000/` adresine gidin. Django, frontend dosyalarını otomatik olarak sunacak ve portfolyo sitesini görebileceksiniz.

---

### İçerik Yönetimi (Admin Paneli)

-   Admin paneline erişmek için `http://127.0.0.1:8000/admin/` adresine gidin.
-   6. adımda oluşturduğunuz yönetici bilgileriyle giriş yapın.
-   Buradan sitedeki tüm içerikleri (Hero, About, Skills, Projects, vb.) düzenleyebilir, yeni içerikler ekleyebilir veya silebilirsiniz.

Umarım bu adımlar yardımcı olur!
