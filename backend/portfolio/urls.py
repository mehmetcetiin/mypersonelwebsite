from rest_framework.routers import DefaultRouter
from .views import (
    HeroViewSet,
    SocialLinkViewSet,
    AboutViewSet,
    SkillViewSet,
    ProjectViewSet,
    ExperienceViewSet,
    EducationViewSet,
    ContactViewSet,
)

router = DefaultRouter()
router.register(r'hero', HeroViewSet)
router.register(r'social-links', SocialLinkViewSet)
router.register(r'about', AboutViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'education', EducationViewSet)
router.register(r'contact', ContactViewSet)

urlpatterns = router.urls
