from django.contrib import admin
from .models import (
    Hero,
    SocialLink,
    About,
    Skill,
    Project,
    ProjectImage,
    Experience,
    Education,
    Contact,
)

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]

admin.site.register(Hero)
admin.site.register(SocialLink)
admin.site.register(About)
admin.site.register(Skill)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(Contact)
